
resource "cloudflare_record" "crea-public" {
  zone_id = var.cloudflare_zone_id
  name    = "crea"
  value   = "crea-public.vercel.app"
  type    = "CNAME"
  proxied = true
}
