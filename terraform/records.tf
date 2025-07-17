
resource "cloudflare_dns_record" "crea-public" {
  zone_id = var.cloudflare_zone_id
  name    = "crea"
  content = "crea-public.vercel.app"
  type    = "CNAME"
  proxied = true
}
