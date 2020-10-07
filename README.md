# Vietnam Phone Number Regex Pattern

## Pattern
(((03)+([2-9]{1})|(05)+([2]{1}|[5-6]{1}|[8-9]{1})|(07)+([0]{1}|[6-9]{1})|(08)+([1-9]{1})|(09)+(\d{1}))+(\d{7})\b)|((02)+(\d{9})\b)|((1800|1900)+(\d{4,6})\b)

Allow:
* Telephone: /(02)+(\d{9})\b/
* Mobile phone: /((03)+([2-9]{1})|(05)+([2]{1}|[5-6]{1}|[8-9]{1})|(07)+([0]{1}|[6-9]{1})|(08)+([1-9]{1})|(09)+(\d{1}))+(\d{7})\b/
* PBX phone: /(1800|1900)+(\d{4,6})\b/

## Source
https://vi.wikipedia.org/wiki/Mã_điện_thoại_Việt_Nam

## Test
* [regexr](https://regexr.com/)
