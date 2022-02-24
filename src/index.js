module.exports = function check(str, bracketsConfig) {
  let myConf = bracketsConfig.map(item => item.join(''))

  for(let j = -1 ; j < myConf.length; j++){
    for (let i = 0; i < myConf.length; i++) {
         if (str.includes(myConf[i])) {
            str = str.replace(myConf[i], '')
            i-- 
        }
    }
  }

 return !str.length ? true : false
}
