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
  name = "event_queue_iam_role"

  managed_policy_arns = ["arn:aws:iam::aws:policy/service-role/AWSLambdaSQSQueueExecutionRole"]
  assume_role_policy  = data.aws_iam_policy_document.instance_assume_role_policy.json
  inline_policy {}

  tags = {
    tag-key = "crea-public"
  }
}
