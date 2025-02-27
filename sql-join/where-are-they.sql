select "a"."line1" as "address", "c"."name", "a"."district", "co"."name" as "country"
from "addresses" as "a"
join "cities" as "c" using ("cityId")
join "countries" as "co" using ("countryId");
