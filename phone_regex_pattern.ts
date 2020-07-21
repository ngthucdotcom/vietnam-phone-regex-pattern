/**
 * @author: ngthuc
 * @created_date: Jun 22nd, 2020
 * @lasted_update: Jul 20th, 2020
 * @homepage: https://ngthuc.com/
 * @repository: https://github.com/ngthucdotcom/vietnam-phone-regex-pattern
 * @license: MIT
 */

/** Phone Regular Expression Pattern
 * Description:
 * - Group 1: ((032|033|034|035|036|037|038|039|052|055|056|058|059|070|076|077|078|079)+([0-9]{7})\b)
 * => Mobile phone of Viettel/Vietnamobile/Reddi/Gmobile/MobiFone in Vietnam
 * - Group 2: (08+([1-9]{8})\b)
 * => Mobile phone of Vinaphone/Viettel/MobiFone/Itelecom in Vietnam
 * - Group 3: (09+([0-9]{8})\b)
 * => Mobile phone of MobiFone/Vinaphone/Viettel/Gmobile in Vietnam
 * - Group 4: (02+([0-9]{9})\b)
 * => Telephone in Vietnam
 * Source: https://vi.wikipedia.org/wiki/M%C3%A3_%C4%91i%E1%BB%87n_tho%E1%BA%A1i_Vi%E1%BB%87t_Nam
 */
export const phone_regex_pattern: string = '((032|033|034|035|036|037|038|039|052|055|056|058|059|070|076|077|078|079)+([0-9]{7})\\b)|(08+([1-9]{8})\\b)|(09+([0-9]{8})\\b)|(02+([0-9]{9})\\b)';

// /**
//  * Usage: to check email
//  */
// export const email_regex_pattern: string = '(([^<>()\\[\\]\\.,;:\\s@\\"]+(\\.[^<>()\\[\\]\\.,;:\\s@\\"]+)*)|(\\".+\\"))@(([^<>()[\\]\\.,;:\\s@\\"]+\\.)+[^<>()[\\]\\.,;:\\s@\\"]{2,})';

// /**
//  * Usage: to check a password from 8 characters more which contain at least:
//  * - one lowercase letter,
//  * - one uppercase letter,
//  * - one numeric digit,
//  * - and one special character
//  */
// export const password_regex_pattern: string = '^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\\s).{8,}$';
