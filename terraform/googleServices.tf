module "project-services" {
  source  = "terraform-google-modules/project-factory/google/modules/project_services"
  version = "14.4.0"

  project_id = "crea-orkest"

  activate_apis = [
    "bigquery.googleapis.com",
    "bigquerymigration.googleapis.com",
    "bigquerystorage.googleapis.com",
    "cloudapis.googleapis.com",
    "cloudresourcemanager.googleapis.com",
    "cloudtrace.googleapis.com",
    "datastore.googleapis.com",
    "directions-backend.googleapis.com",
    "distance-matrix-backend.googleapis.com",
    "elevation-backend.googleapis.com",
    "geocoding-backend.googleapis.com",
    "geolocation.googleapis.com",
    "iam.googleapis.com",
    "iamcredentials.googleapis.com",
    "logging.googleapis.com",
    "maps-backend.googleapis.com",
    "maps-embed-backend.googleapis.com",
    "monitoring.googleapis.com",
    "places-backend.googleapis.com",
    "roads.googleapis.com",
    "servicemanagement.googleapis.com",
    "serviceusage.googleapis.com",
    "sql-component.googleapis.com",
    "static-maps-backend.googleapis.com",
    "storage-api.googleapis.com",
    "storage-component.googleapis.com",
    "storage.googleapis.com",
    "street-view-image-backend.googleapis.com",
    "streetviewpublish.googleapis.com",
    "sts.googleapis.com",
    "timezone-backend.googleapis.com",
  ]
}
