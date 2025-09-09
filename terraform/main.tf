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
      version = "0.109.0"
    }
    cloudflare = {
      source  = "cloudflare/cloudflare"
      version = "4.52.4"
    }
    vercel = {
      source  = "vercel/vercel"
      version = "2.15.1"
    }
  }
}
