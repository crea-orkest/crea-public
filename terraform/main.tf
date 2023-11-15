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
      version = "5.25.0"
    }
    hcp = {
      source  = "hashicorp/hcp"
      version = "0.77.0"
    }
    cloudflare = {
      source  = "cloudflare/cloudflare"
      version = "4.18.0"
    }
    vercel = {
      source  = "vercel/vercel"
      version = "0.16.0"
    }
  }
}

resource "aws_s3_bucket" "crea-orkest" {
  bucket = "crea-orkest"
}

resource "aws_sqs_queue" "eventQueue" {
  name                      = "eventQueue"
  delay_seconds             = 10
  max_message_size          = 1024
  message_retention_seconds = 3600
  sqs_managed_sse_enabled   = true
}
