
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

resource "google_project" "crea-orkest" {
  name       = "crea orkest"
  project_id = "crea-orkest"
}
