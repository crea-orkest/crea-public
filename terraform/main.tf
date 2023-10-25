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
      version = "5.21.0"
    }
  }
}

resource "aws_s3_bucket" "crea-orkest" {
  bucket = "crea-orkest"
}
