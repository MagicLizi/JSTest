/**
 * Created by MagicLizi on 2016/10/24.
 */
module.exports = class baseModel
{
    // 构造
    constructor(data)
    {
        this.d = data;
    }

    getName()
    {
        console.log(this.d);
    }
}