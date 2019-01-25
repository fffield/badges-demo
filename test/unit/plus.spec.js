import { plus } from "../../src/index";
const expect = require('chai').expect;

describe('测试加法', () => {
    it('1 + 1 等于2',()=>{
        expect(plus(1,1)).to.equal(2);
    })
});