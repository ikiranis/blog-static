#!/bin/bash
#
# wordpress backend - posts checksum to  refresh static
#
# (c) dsphinx@plug.gr Feb 2020
#

# Edit with your settings
URI="https://<ny.wordpress-site.com>/wp-json/wp/v2/posts"
PROJECT_PATH='<full project path>'

CSUM="/tmp/.checksum."`basename -s sh  $0`
TMP=`mktemp`

curl -s "$URI" > $TMP
[ -f $CSUM ] || md5sum $TMP | awk '{print $1}' > $CSUM
md5sum $TMP  | awk '{print $1}' > "$TMP.md5"
cd "$PROJECT_PATH"
cmp --silent $CSUM "$TMP.md5" || ( `gridsome build 1>&2 /dev/null` && md5sum $TMP | awk '{print $1}' > $CSUM )
rm -f "$TMP" "$TMP.md5"

