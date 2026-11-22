---
title: "Organize photo library"
related: true
header:
  overlay_image: /assets/images/maico-amorim-57141.jpg
  caption: "Photo credit: [**Unsplash**](https://unsplash.com)"
  teaser: /assets/images/maico-amorim-57141.jpg
categories:
  - Computer
tags:
  - Linux
---

- [Environment](#environment)
- [Upload](#upload)
- [Consolidate](#consolidate)
- [Backups](#backups)
- [Show](#show)

### Environment

@startuml
[SonyA6000]
[Iphone1]
[Iphone2]
[Camera XTrem]

[Imac]

[SynologyNAS]
[DLinkDNS320]
[OVHServer]


[SonyA6000]-->[Imac]
[Camera XTrem]-->[Imac]

[Iphone1]--->[SynologyNAS]: DS Photo sync to "Last import"
[Iphone2]--->[SynologyNAS]: DS Photo sync to "Last import"


[Imac]--->[SynologyNAS]: Upload to "Last import"


[SynologyNAS]--> [DLinkDNS320]: Rsync
[SynologyNAS] --> [OVHServer]: Rsync
@enduml

### Upload

- Import the SD card into Apple Photos to show all photos.
Select

- 2 ways:
use the Synology uploader to upload photos into the Dernière importation folder

### Consolidate

LAST-IMPORT
YEAR
   YEAR-MONTH-DAY
        YEAR-MONTH-DAY-HOURMINUTESECOND_INCR.EXTENSION

ex:

Dernière importation
Iphone 1
Iphone 2
2018
    ...
    2018-10-09
        2018-10-09-056734_1.JPG
        2018-10-09-056734_2.JPG
        2018-10-09-076734_1.JPG
        ...
...

Execute scripts:

Consolidate Dernière Importation into the library.
Automatically move all photos into the right directory.
If two files have the same timestamp, a counter is added.

```code
./clean.sh -s false Dernière\ importation /volume1/photo

./clean.sh -s false iphone\ Lili/ /volume1/photo

./clean.sh -s false iphone\ Jo/ /volume1/photo
```

### Backups


One local backup on the DLinkDNS320
One remote backup on the OVH Server

Google Photos backups


### Show

Access DS Photo from anywhere, on any device.


You manage your library as you want. It is not tied to any application,
unlike Apple Photos, Microsoft, or others.
