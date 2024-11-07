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
      version = "5.75.0"
    }
    google = {
      source  = "hashicorp/google"
      version = "5.44.2"
    }
    hcp = {
      source  = "hashicorp/hcp"
      version = "0.97.0"
    }
    cloudflare = {
      source  = "cloudflare/cloudflare"
      version = "4.45.0"
    }
    vercel = {
      source  = "vercel/vercel"
      version = "1.14.1"
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
