/**
 * Slovak translation
 * @author Jakub Ďuraš <jkblmr@gmail.com>, RobiNN <admin@robonetwork.cf>
 * @version 2016-6-2
 */
if (elFinder && elFinder.prototype && typeof(elFinder.prototype.i18) == 'object') {
	elFinder.prototype.i18.sk = {
		translator : 'Jakub Ďuraš &lt;jkblmr@gmail.com&gt;, RobiNN &lt;admin@robonetwork.cf&gt;',
		language   : 'slovenčina',
		direction  : 'ltr',
		dateFormat : 'd.m.Y H:i',
		fancyDateFormat : '$1 H:i',
		messages   : {
			
			/********************************** errors **********************************/
			'error'                : 'Chyba',
			'errUnknown'           : 'Neznáma chyba.',
			'errUnknownCmd'        : 'Neznámy príkaz.',
			'errJqui'              : 'Nesprávna jQuery UI konfigurácia. Selectable, draggable a droppable musia byť načítané.',
			'errNode'              : 'elFinder vyžaduje vytvorenie DOM Elementu.',
			'errURL'               : 'Nesprávna elFinder konfigurácia! URL nie je definovaná.',
			'errAccess'            : 'Prístup zamietnutý.',
			'errConnect'           : 'Nepodarilo sa pripojiť do backendu.',
			'errAbort'             : 'Pripojenie zrušené.',
			'errTimeout'           : 'Vypršal limit pripojenia.',
			'errNotFound'          : 'Backend nenájdený.',
			'errResponse'          : 'Nesprávna backend odpoveď.',
			'errConf'              : 'Nesprávna backend konfigurácia.',
			'errJSON'              : 'Požadovaný PHP JSON modul nie je nainštalovaný.',
			'errNoVolumes'         : 'Nie je dostupné žiadne čitateľné médium.',
			'errCmdParams'         : 'Nesprávne parametre pre príkaz "$1".',
			'errDataNotJSON'       : 'Dáta nie sú formátu JSON.',
			'errDataEmpty'         : 'Prázdne dáta.',
			'errCmdReq'            : 'Backend požiadavka požaduje meno príkazu.',
			'errOpen'              : 'Nie je možné otvoriť súbor "$1".',
			'errNotFolder'         : 'Objekt nie je priečinok.',
			'errNotFile'           : 'Objekt nie je súbor.',
			'errRead'              : 'Nie je možné prečítať súbor "$1".',
			'errWrite'             : 'Nie je možné písať do súboru "$1".',
			'errPerm'              : 'Nepovolený prístup.',
			'errLocked'            : '"$1" je uzamknutý, a nemôže byť premenovaný, presunutý alebo odstránený.',
			'errExists'            : 'Súbor s menom "$1" už existuje.',
			'errInvName'           : 'Nesprávne meno súboru.',
			'errFolderNotFound'    : 'Priečinok nenájdený.',
			'errFileNotFound'      : 'Súbor nenájdený.',
			'errTrgFolderNotFound' : 'Zvolený priečinok "$1" nenájdený.',
			'errPopup'             : 'Prehliadač zablokoval otvorenie vyskakovacieho okna. Pre otvorenie súboru povoľte vyskakovacie okná.',
			'errMkdir'             : 'Nie je možné vytvoriť priečinok "$1".',
			'errMkfile'            : 'Nie je možné vytvoriť súbor "$1".',
			'errRename'            : 'Nie je možné premenovať "$1".',
			'errCopyFrom'          : 'Kopírovanie súborov z média "$1" nie je povolené.',
			'errCopyTo'            : 'Kopírovanie súborov na médium "$1" nie je povolené.',
			'errMkOutLink'         : 'Nie je možné vytvoriť odkaz mimo koreňového zväzku.', 
			'errUpload'            : 'Problém s nahrávaním.',
			'errUploadFile'        : 'Nie je možné nahrať "$1".',
			'errUploadNoFiles'     : 'Žiadne súbory neboli nájdené na nahranie.',
			'errUploadTotalSize'   : 'Dáta prekračujú maximálnu povolenú veľkosť.',
			'errUploadFileSize'    : 'Súbor prekračuje maximálnu povolenú veľkosť.',
			'errUploadMime'        : 'Nepovolený typ súboru.',
			'errUploadTransfer'    : 'Problém s nahrávaním "$1".',
			'errUploadTemp'        : 'Nie je možné vytvoriť dočasný súbor pre nahranie.',
			'errNotReplace'        : 'Objekt "$1" na tomto mieste už existuje a nemôže byť nahradený objektom s iným typom.',
			'errReplace'           : 'Nie je možné nahradiť "$1".',
			'errSave'              : 'Nie je možné uložiť "$1".',
			'errCopy'              : 'Nie je možné kopíropvať "$1".',
			'errMove'              : 'Nie je možné preniesť "$1".',
			'errCopyInItself'      : 'Nie je možné kopírovať "$1" do seba.',
			'errRm'                : 'Nie je možné vymazať "$1".',
			'errRmSrc'             : 'Nie je možné odstrániť zdrojové súbor(y).',
			'errExtract'           : 'Nie je možné extrahovať súbory z "$1".',
			'errArchive'           : 'Nie je možné vytvoriť archív.',
			'errArcType'           : 'Nepodporovaný typ archívu.',
			'errNoArchive'         : 'Súbor nie je archívom, alebo je nepodporovaného typu.',
			'errCmdNoSupport'      : 'Backend nepodporuje tento príkaz.',
			'errReplByChild'       : 'Priečinok "$1" nemôže byť nahradený položkou, ktorú už obsahuje.',
			'errArcSymlinks'       : 'Z bezpečnostných dôvodov bolo zakázané extrahovanie archívov obsahujúcich symlinky, alebo súborov s nepovolenými menami.',
			'errArcMaxSize'        : 'Súbory archívu prekračujú maximálnu povolenú veľkosť.',
			'errResize'            : 'Nie je možné zmeniť veľkost "$1".',
			'errResizeDegree'      : 'Neplatný stupeň otočenia.',
			'errResizeRotate'      : 'Nie je možné otočiť obrázok.',
			'errResizeSize'        : 'Neplatná veľkosť obrázka.',
			'errResizeNoChange'    : 'Veľkosť obrázka sa nezmení.',
			'errUsupportType'      : 'Nepodporovaný typ súboru.',
			'errNotUTF8Content'    : 'Súbor "$1" nemá obsah kódovaný v UTF-8, a nemôže byť upravený.',
			'errNetMount'          : 'Nie je možné pripojiť "$1".',
			'errNetMountNoDriver'  : 'Nepodporovaný protokol.',
			'errNetMountFailed'    : 'Pripájanie zlyhalo.',
			'errNetMountHostReq'   : 'Hosť je požadovaný.',
			'errSessionExpires'    : 'Platnosť relácie uplynula z dôvodu nečinnosti.',
			'errCreatingTempDir'   : 'Nedá sa vytvoriť dočasný adresár: "$1"',
			'errFtpDownloadFile'   : 'Nie je možné stiahnuť súbor z FTP: "$1"',
			'errFtpUploadFile'     : 'Nie je možné nahrať súbor na FTP: "$1"',
			'errFtpMkdir'          : 'Nedá sa vytvoriť vzdialený adresár na FTP: "$1"',
			'errArchiveExec'       : 'Chyba pri archivácii súborov: "$1"',
			'errExtractExec'       : 'Chyba pri extrahovaní súborov: "$1"',
			'errNetUnMount'        : 'Nepodarilo sa odpojiť',
			'errConvUTF8'          : 'Nedá sa previesť na UTF-8',
			'errFolderUpload'      : 'Ak by ste chceli nahrať zložku, skúste prehliadač Google Chrome.',
			'errSearchTimeout'     : 'Vypršal časový limit pri hľadaní "$1". Výsledok vyhľadávania je čiastočný.',
			'errReauthRequire'     : 'Opätovné povolenie je nutné.',

			/******************************* commands names ********************************/
			'cmdarchive'   : 'Vytvoriť archív',
			'cmdback'      : 'Späť',
			'cmdcopy'      : 'Kopírovať',
			'cmdcut'       : 'Vystrihnúť',
			'cmddownload'  : 'Stiahnuť',
			'cmdduplicate' : 'Duplikovať',
			'cmdedit'      : 'Upraviť súbor',
			'cmdextract'   : 'Extrahovať súbory z archívu',
			'cmdforward'   : 'Ďalej',
			'cmdgetfile'   : 'Zvoliť súbory',
			'cmdhelp'      : 'O tomto softvéri',
			'cmdhome'      : 'Domov',
			'cmdinfo'      : 'Získať info',
			'cmdmkdir'     : 'Nový priečinok',
			'cmdmkdirin'   : 'Do novej zložky',
			'cmdmkfile'    : 'Nový textový súbor',
			'cmdopen'      : 'Otvoriť',
			'cmdpaste'     : 'Vložiť',
			'cmdquicklook' : 'Náhľad',
			'cmdreload'    : 'Obnoviť',
			'cmdrename'    : 'Premenovať',
			'cmdrm'        : 'Vymazať',
			'cmdsearch'    : 'Nájsť súbory',
			'cmdup'        : 'Prejsť do nadradeného priečinka',
			'cmdupload'    : 'Nahrať súbory',
			'cmdview'      : 'Pozrieť',
			'cmdresize'    : 'Zmeniť veľkosť obrázku',
			'cmdsort'      : 'Zoradiť',
			'cmdnetmount'  : 'Pripojiť sieťové médium',
			'cmdnetunmount': 'Odpojiť',
			'cmdplaces'    : 'Na umiestnenie',
			'cmdchmod'     : 'Zmeniť režim',
			'cmdopendir'   : 'Otvoriť priečinok',
			
			/*********************************** buttons ***********************************/
			'btnClose'  : 'Zavrieť',
			'btnSave'   : 'Uložiť',
			'btnRm'     : 'Vymazať',
			'btnApply'  : 'Použiť',
			'btnCancel' : 'Zrušiť',
			'btnNo'     : 'Nie',
			'btnYes'    : 'Áno',
			'btnMount'  : 'Pripojiť',
			'btnApprove': 'Ísť na $1 & schváliť',
			'btnUnmount': 'Odpojiť',
			'btnConv'   : 'Previesť',
			'btnCwd'    : 'Tu',
			'btnVolume' : 'Hlasitosť',
			'btnAll'    : 'Všetko',
			'btnMime'   : 'MIME typ',
			'btnFileName':'Názov súboru',
			'btnSaveClose': 'Uložiť & zavrieť',
			'btnBackup' : 'Zálohovať',
			
			/******************************** notifications ********************************/
			'ntfopen'     : 'Otváranie priečinka',
			'ntffile'     : 'Otváranie súboru',
			'ntfreload'   : 'Znovu-načítanie obsahu priečinka',
			'ntfmkdir'    : 'Vytváranie priečinka',
			'ntfmkfile'   : 'Vytváranie súborov',
			'ntfrm'       : 'Vymazanie súborov',
			'ntfcopy'     : 'Kopírovanie súborov',
			'ntfmove'     : 'Premiestnenie súborov',
			'ntfprepare'  : 'Príprava na kopírovanie súborov',
			'ntfrename'   : 'Premenovanie súborov',
			'ntfupload'   : 'Nahrávanie súborov',
			'ntfdownload' : 'Sťahovanie súborov',
			'ntfsave'     : 'Uloženie súborov',
			'ntfarchive'  : 'Vytváranie archívu',
			'ntfextract'  : 'Extrahovanie súborov z archívu',
			'ntfsearch'   : 'Prehľadávanie súborov',
			'ntfresize'   : 'Zmena veľkosti obrázkov',
			'ntfsmth'     : 'Nejaká činnosť',
			'ntfloadimg'  : 'Načítavanie obrázka',
			'ntfnetmount' : 'Pripájanie sieťového média',
			'ntfnetunmount': 'Odpájanie sieťového média',
			'ntfdim'      : 'Získanie rozmer obrázka',
			'ntfreaddir'  : 'Čítajú sa informácie o priečinku',
			'ntfurl'      : 'Získanie adresy URL odkazu',
			'ntfchmod'    : 'Zmena súboru',
			'ntfpreupload': 'Overenie názvu nahravaného súboru',
			'ntfzipdl'    : 'Vytvorenie súboru na stiahnutie',
			
			/************************************ dates **********************************/
			'dateUnknown' : 'neznámy',
			'Today'       : 'Dnes',
			'Yesterday'   : 'Včera',
			'msJan'       : 'Jan',
			'msFeb'       : 'Feb',
			'msMar'       : 'Mar',
			'msApr'       : 'Apr',
			'msMay'       : 'Maj',
			'msJun'       : 'Jun',
			'msJul'       : 'Júl',
			'msAug'       : 'Aug',
			'msSep'       : 'Sep',
			'msOct'       : 'Okt',
			'msNov'       : 'Nov',
			'msDec'       : 'Dec',
			'January'     : 'Január',
			'February'    : 'Február',
			'March'       : 'Marec',
			'April'       : 'Apríl',
			'May'         : 'Máj',
			'June'        : 'Jún',
			'July'        : 'Júl',
			'August'      : 'August',
			'September'   : 'September',
			'October'     : 'Október',
			'November'    : 'November',
			'December'    : 'December',
			'Sunday'      : 'Nedeľa', 
			'Monday'      : 'Pondelok', 
			'Tuesday'     : 'Utorok', 
			'Wednesday'   : 'Streda', 
			'Thursday'    : 'Štvrtok', 
			'Friday'      : 'Piatok', 
			'Saturday'    : 'Sobota',
			'Sun'         : 'Ned', 
			'Mon'         : 'Pon', 
			'Tue'         : 'Ut', 
			'Wed'         : 'Str', 
			'Thu'         : 'Štv', 
			'Fri'         : 'Pia', 
			'Sat'         : 'Sob',

			/******************************** sort variants ********************************/
			'sortname'          : 'podľa mena',
			'sortkind'          : 'podľa druhu',
			'sortsize'          : 'podľa veľkosti',
			'sortdate'          : 'podľa dátumu',
			'sortFoldersFirst'  : 'Najskôr Priečinky',

			/********************************** new items **********************************/
			'untitled file.txt' : 'Nový súbor.txt',
			'untitled folder'   : 'Nový priečinok',
			'Archive'           : 'Nový archív',

			/********************************** messages **********************************/
			'confirmReq'      : 'Očakávam potvrdenie',
			'confirmRm'       : 'Určite chcete vymazať súbory?<br/>Nebude sa to dať vrátiť späť!',
			'confirmRepl'     : 'Nahradiť starý súbor novým?',
			'confirmConvUTF8' : 'Nie je v UTF-8<br/>Previesť na UTF-8?<br/>Obsah sa stane UTF-8 uložením po konverzii.',
			'confirmNotSave'  : 'Bol upravený.<br/>Ak zmeny neuložíte, stratíte vykonanú prácu.',
			'apllyAll'        : 'Použiť na všetky',
			'name'            : 'Meno',
			'size'            : 'Veľkosť',
			'perms'           : 'Povolenia',
			'modify'          : 'Zmenené',
			'kind'            : 'Druh',
			'read'            : 'čítať',
			'write'           : 'zapisovať',
			'noaccess'        : 'bez prístupu',
			'and'             : 'a',
			'unknown'         : 'neznámy',
			'selectall'       : 'Vybrať všetky súbory',
			'selectfiles'     : 'Vybrať súbor(y)',
			'selectffile'     : 'Vybrať prvý súbor',
			'selectlfile'     : 'Vybrať posledný súbor',
			'viewlist'        : 'Zoznam',
			'viewicons'       : 'Ikony',
			'places'          : 'Miesta',
			'calc'            : 'Prepočítavanie',
			'path'            : 'Cesta',
			'aliasfor'        : 'Alias pre',
			'locked'          : 'Uzamknuté',
			'dim'             : 'Rozmery',
			'files'           : 'Súbory',
			'folders'         : 'Priečinky',
			'items'           : 'Položky',
			'yes'             : 'áno',
			'no'              : 'nie',
			'link'            : 'Odkaz',
			'searcresult'     : 'Výsledky hľadania',
			'selected'        : 'zvolené položky',
			'about'           : 'O aplikácii',
			'shortcuts'       : 'Skratky',
			'help'            : 'Pomoc',
			'webfm'           : 'Webový správca súborov',
			'ver'             : 'Verzia',
			'protocolver'     : 'verzia protokolu',
			'homepage'        : 'Domovská stránka',
			'docs'            : 'Dokumentácia',
			'github'          : 'Pozri nás na Githube',
			'twitter'         : 'Nasleduj nás na Twitteri',
			'facebook'        : 'Pripoj sa k nám na Facebooku',
			'team'            : 'Tím',
			'chiefdev'        : 'hlavný vývojár',
			'developer'       : 'vývojár',
			'contributor'     : 'prispievateľ',
			'maintainer'      : 'správca',
			'translator'      : 'prekladateľ',
			'icons'           : 'Ikony',
			'dontforget'      : 'a nezabudnite si vziať svoj uterák',
			'shortcutsof'     : 'Skratky zakázané',
			'dropFiles'       : 'Sem pustite súbory',
			'or'              : 'alebo',
			'selectForUpload' : 'Zvoliť súbory na nahranie',
			'moveFiles'       : 'Premiestniť súbory',
			'copyFiles'       : 'Kopírovať súbory',
			'rmFromPlaces'    : 'Odstrániť z umiestnení',
			'aspectRatio'     : 'Pomer zobrazenia',
			'scale'           : 'Mierka',
			'width'           : 'Šírka',
			'height'          : 'Výška',
			'resize'          : 'Zmeniť veľkosť',
			'crop'            : 'Zrezať',
			'rotate'          : 'Otočiť',
			'rotate-cw'       : 'Otočiť o 90 stupňov (v smere h.r.)',
			'rotate-ccw'      : 'Otočiť o 90 stupňov (proti smeru)',
			'degree'          : '° (stupne)',
			'netMountDialogTitle' : 'Pripojiť sieťové médium',
			'protocol'            : 'Protokol',
			'host'                : 'Hosť',
			'port'                : 'Port',
			'user'                : 'Užívateľ',
			'pass'                : 'Heslo',
			'confirmUnmount'      : 'Chcete odpojiť $1?',
			'dropFilesBrowser': 'Premiestnite alebo prilepte súbory z prehliadača',
			'dropPasteFiles'  : 'Tu premiestnite alebo prilepte súbory a adresy URL',
			'encoding'        : 'Kódovanie',
			'locale'          : 'Lokalizácia',  
			'searchTarget'    : 'Cieľ: $1',
			'searchMime'      : 'Vyhľadávanie podľa vstupného MIME typu',
			'owner'           : 'Majiteľ',
			'group'           : 'Skupina',
			'other'           : 'Ostatné',
			'execute'         : 'Spustiť',
			'perm'            : 'Povolenie',
			'mode'            : 'Režim',
			'emptyFolder'     : 'Priečinok je prázdny',
			'emptyFolderDrop' : 'Priečinok je prázdny\\Premiestnite alebo prilepte položky',
			'emptyFolderLTap' : 'Priečinok je prázdny\\Dlhým kliknutím pridáte položky',
			'quality'         : 'Kvalita',
			'autoSync'        : 'Automatická synchronizácia',
			'moveUp'          : 'Posunúť nahor',
			'getLink'         : 'Získať URL odkaz',
			'selectedItems'   : 'Vybraté položky ($1)',
			'folderId'        : 'ID priečinka',
			'offlineAccess'   : 'Povoliť prístup v offline režime',
			'reAuth'          : 'Znova overiť',
			'nowLoading'      : 'Práve načítava...',
			'openMulti'       : 'Otvorenie viacerých súborov',
			'openMultiConfirm': 'Pokúšate sa otvoriť súbor $1. Naozaj ho chcete otvoriť v prehliadači?',
			'emptySearch'     : 'Výsledky vyhľadávania je prázdny',

			/********************************** mimetypes **********************************/
			'kindUnknown'     : 'Neznámy',
			'kindFolder'      : 'Priečinok',
			'kindAlias'       : 'Alias',
			'kindAliasBroken' : 'Porušený alias',
			// applications
			'kindApp'         : 'Aplikácia',
			'kindPostscript'  : 'Postscript dokument',
			'kindMsOffice'    : 'Microsoft Office dokument',
			'kindMsWord'      : 'Microsoft Word dokument',
			'kindMsExcel'     : 'Microsoft Excel dokument',
			'kindMsPP'        : 'Microsoft Powerpoint prezentácia',
			'kindOO'          : 'Open Office dokument',
			'kindAppFlash'    : 'Flashová aplikácia',
			'kindPDF'         : 'Portable Document Format (PDF)',
			'kindTorrent'     : 'Bittorrent súbor',
			'kind7z'          : '7z archív',
			'kindTAR'         : 'TAR archív',
			'kindGZIP'        : 'GZIP archív',
			'kindBZIP'        : 'BZIP archív',
			'kindXZ'          : 'XZ archív',
			'kindZIP'         : 'ZIP archív',
			'kindRAR'         : 'RAR archív',
			'kindJAR'         : 'Java JAR súbor',
			'kindTTF'         : 'True Type font',
			'kindOTF'         : 'Open Type font',
			'kindRPM'         : 'RPM balík',
			// texts
      'kindText'        : 'Textový document',
			'kindTextPlain'   : 'Obyčajný text',
			'kindPHP'         : 'PHP zdrojový kód',
			'kindCSS'         : 'Cascading style sheet (CSS)',
			'kindHTML'        : 'HTML dokument',
			'kindJS'          : 'Javascript zdrojový kód',
			'kindRTF'         : 'Rich Text Format',
			'kindC'           : 'C zdrojový kód',
			'kindCHeader'     : 'C header zdrojový kód',
			'kindCPP'         : 'C++ zdrojový kód',
			'kindCPPHeader'   : 'C++ header zdrojový kód',
			'kindShell'       : 'Unix shell script',
			'kindPython'      : 'Python zdrojový kód',
			'kindJava'        : 'Java zdrojový kód',
			'kindRuby'        : 'Ruby zdrojový kód',
			'kindPerl'        : 'Perl zdrojový kód',
			'kindSQL'         : 'SQL zdrojový kód',
			'kindXML'         : 'XML dokument',
			'kindAWK'         : 'AWK zdrojový kód',
			'kindCSV'         : 'Čiarkou oddeľované hodnoty',
			'kindDOCBOOK'     : 'Docbook XML dokument',
			'kindMarkdown'    : 'Markdown text',
			// images
			'kindImage'       : 'Obrázok',
			'kindBMP'         : 'BMP obrázok',
			'kindJPEG'        : 'JPEG obrázok',
			'kindGIF'         : 'GIF obrázok',
			'kindPNG'         : 'PNG obrázok',
			'kindTIFF'        : 'TIFF obrázok',
			'kindTGA'         : 'TGA obrázok',
			'kindPSD'         : 'Adobe Photoshop obrázok',
			'kindXBITMAP'     : 'X bitmap obrázok',
			'kindPXM'         : 'Pixelmator obrázok',
			// media
			'kindAudio'       : 'Zvukový súbor',
			'kindAudioMPEG'   : 'MPEG zvuk',
			'kindAudioMPEG4'  : 'MPEG-4 zvuk',
			'kindAudioMIDI'   : 'MIDI zvuk',
			'kindAudioOGG'    : 'Ogg Vorbis zvuk',
			'kindAudioWAV'    : 'WAV zvuk',
			'AudioPlaylist'   : 'MP3 playlist',
			'kindVideo'       : 'Video súbor',
			'kindVideoDV'     : 'DV video',
			'kindVideoMPEG'   : 'MPEG video',
			'kindVideoMPEG4'  : 'MPEG-4 video',
			'kindVideoAVI'    : 'AVI video',
			'kindVideoMOV'    : 'Quick Time video',
			'kindVideoWM'     : 'Windows Media video',
			'kindVideoFlash'  : 'Flash video',
			'kindVideoMKV'    : 'Matroska video',
			'kindVideoOGG'    : 'Ogg video'
		}
	};
}
