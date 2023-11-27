
resource "google_apikeys_key" "maps" {
  name         = "maps-api-key"
  display_name = "Google Maps api key"

  restrictions {
    api_targets {
      service = "maps-backend.googleapis.com"
    }
    api_targets {
      service = "places-backend.googleapis.com"
    }
    browser_key_restrictions {
      allowed_referrers = ["http://localhost:3000", "https://localhost:3000", "https://crea.vandiessen.com", "https://crea-public.vercel.app"]
    }
  }
}

resource "google_apikeys_key" "primary" {
  name         = "key"
  display_name = "sample-key"
  project      = google_project.crea.name

  restrictions {
    api_targets {
      service = "translate.googleapis.com"
      methods = ["GET*"]
    }

    server_key_restrictions {
      allowed_ips = ["127.0.0.1"]
    }
  }
}


resource "google_storage_bucket" "static-site" {
  name          = "image-store.com"
  location      = "EU"
  force_destroy = true

  uniform_bucket_level_access = true

  website {
    main_page_suffix = "index.html"
    not_found_page   = "404.html"
  }
  cors {
    origin          = ["http://image-store.com"]
    method          = ["GET", "HEAD", "PUT", "POST", "DELETE"]
    response_header = ["*"]
    max_age_seconds = 3600
  }
}

resource "google_project" "crea" {
  name       = "crea orkest"
  project_id = "crea-orkest"
}
