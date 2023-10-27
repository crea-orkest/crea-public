terraform {
  cloud {
    organization = "crea-orkest"
    hostname     = "app.terraform.io"
    workspaces {
      project = "crea"
      name    = "crea-public"
    }
  }
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "5.23.1"
    }
  }
}

resource "aws_s3_bucket" "crea-orkest" {
  bucket = "crea-orkest"
}

resource "aws_sqs_queue" "datocms_deploy_queue" {
  name                       = "datocms_deploy_queue"
  delay_seconds              = 10
  max_message_size           = 1024
  message_retention_seconds  = 3600
  sqs_managed_sse_enabled    = true
}
