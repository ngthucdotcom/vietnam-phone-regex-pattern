/**
 * @author: ngthuc
 * @created_date: Jun 22nd, 2020
 * @lasted_update: Aug 10th, 2020
 * @homepage: https://ngthuc.com/
 * @repository: https://github.com/ngthucdotcom/vietnam-phone-regex-pattern
 * @license: MIT
 */

/** Phone Regular Expression Pattern
 * Detail: ((03+([2-9]{1})|05+([2]{1}|[5-6]{1}|[8-9]{1})|07+([0]{1}|[6-9]{1})|08+([1-9]{1})|09+([0-9]{1}))+([0-9]{7})\b)|(02+([0-9]{9})\b)
 * Description:
 * - Group 1: (03+([2-9]{1})|05+([2]{1}|[5-6]{1}|[8-9]{1})|07+([0]{1}|[6-9]{1})|08+([1-9]{1})|09+([0-9]{1}))+([0-9]{7})\b)
 * => Mobile phone of Viettel/Vietnamobile/Reddi/Gmobile/MobiFone/Vinaphone/Itelecom/Gmobile in Vietnam
 * - Group 2: (02+([0-9]{9})\b)
 * => Telephone in Vietnam
 * Source: https://vi.wikipedia.org/wiki/Mã_điện_thoại_Việt_Nam
 */
export const phone_regex_pattern: string = '((03+([2-9]{1})|05+([2]{1}|[5-6]{1}|[8-9]{1})|07+([0]{1}|[6-9]{1})|08+([1-9]{1})|09+([0-9]{1}))+([0-9]{7})\b)|(02+([0-9]{9})\b)';

/**
 * Email pattern
 * Usage: to check email
 * export const email_regex_pattern: string = '(([^<>()\\[\\]\\.,;:\\s@\\"]+(\\.[^<>()\\[\\]\\.,;:\\s@\\"]+)*)|(\\".+\\"))@(([^<>()[\\]\\.,;:\\s@\\"]+\\.)+[^<>()[\\]\\.,;:\\s@\\"]{2,})';
 *
 * Password pattern
 * Usage: to check a password from 8 characters more which contain at least:
 * - one lowercase letter,
 * - one uppercase letter,
 * - one numeric digit,
 * - and one special character
 * export const password_regex_pattern: string = '^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\\s).{8,}$';
*/
