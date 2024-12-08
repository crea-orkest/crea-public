data "aws_iam_policy_document" "instance_assume_role_policy" {
  statement {
    actions = ["sts:AssumeRole"]

    principals {
      type        = "Service"
      identifiers = ["ec2.amazonaws.com"]
    }
  }
}

resource "aws_iam_role" "event_queue_iam_role" {
  name               = "event_queue_iam_role"
  assume_role_policy = data.aws_iam_policy_document.instance_assume_role_policy.json

  tags = {
    tag-key = "crea-public"
  }
}

resource "aws_iam_role_policy_attachment" "event_queue_iam_role_policy_attachment" {
  role       = aws_iam_role.event_queue_iam_role.name
  policy_arn = "arn:aws:iam::aws:policy/service-role/AWSLambdaSQSQueueExecutionRole"
}

resource "aws_iam_role_policy" "event_queue_iam_role_policy" {
  name = "event_queue_iam_role_policy"
  role = aws_iam_role.event_queue_iam_role.id
  policy = jsonencode({
    Version   = "2012-10-17"
    Statement = []
  })
}

