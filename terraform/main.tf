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
    hcp = {
      source  = "hashicorp/hcp"
      version = "0.111.0"
    }
    cloudflare = {
      source  = "cloudflare/cloudflare"
      version = "4.52.5"
    }
    vercel = {
      source  = "vercel/vercel"
      version = "4.5.0"
    }
  }
}
