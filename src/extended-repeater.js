import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
	if (options.separator === undefined) options.separator="+"
	if (options.additionSeparator === undefined) options.additionSeparator="|"
	if (options.addition === undefined) options.addition=""
	if (options.repeatTimes === undefined) options.repeatTimes=1
	if (options.additionRepeatTimes === undefined) options.additionRepeatTimes=1
	
  
	let add = `${options.addition}${options.additionSeparator}`
	let addD = `${add.repeat(options.additionRepeatTimes-1)}${options.addition}`

	let st = `${str}${addD}${options.separator}`
	let stT = `${st.repeat(options.repeatTimes-1)}${str}${addD}`
	 
	

	
 return stT
}

