proto="$(echo $JAWSDB_URL | grep :// | sed -e's,^\(.*://\).*,\1,g')"
url=$(echo $JAWSDB_URL | sed -e s,$proto,,g)
userpass="$(echo $url | grep @ | cut -d@ -f1)"
pass="$(echo $userpass | grep : | cut -d: -f2)"
user="$(echo $userpass | grep : | cut -d: -f1)"
hostport=$(echo $url | sed -e s,$userpass@,,g | cut -d/ -f1)
host="$(echo $hostport | sed -e 's,:.*,,g')"
port="$(echo $hostport | sed -e 's,^.*:,:,g' -e 's,.*:\([0-9]*\).*,\1,g' -e 's,[^0-9],,g')"
db="$(echo $url | grep / | cut -d/ -f2-)"
echo "[mysqldump]" > .my.cnf
echo "password="$pass >> .my.cnf
bin/mysqldump --single-transaction -u $user -h $host $db | gzip | curl -vvv -k ${SFTPTOGO_URL}/mysql-backups/mysqldump-${db}-`date '+%Y%m%d-%H%M%S'`.sql.gz -T - --create-dirs