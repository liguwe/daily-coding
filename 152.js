/*************************************************
 * 判断一个JSON是否合法
 ************************************************/

function isJSONStr(str) {

    if (typeof str == 'string') {
        try {
            return JSON.parse(str) === "object";
        } catch (e) {
            console.log(e);
            return false;
        }
    }
    console.log('It is not a string!')
}