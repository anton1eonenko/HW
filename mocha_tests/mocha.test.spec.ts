// import assert from "assert"; a

import {assert, expect} from "chai"
import { Class } from "../HW";



describe("quantityOfIndex test", function() {
    it ("positive1", function() {
      const result = new Class
      const actual = result.quantityOfIndex('привет привет привет', 'п');
      const expected = 'п3'
        assert.equal(actual, expected, 'Ошибка')
    });
    it ("positive2", function() {
      const result = new Class
      const actual = result.quantityOfIndex('Добрый день', 'ы');
      const expected = 'ы1'
        assert.equal(actual, expected, 'Ошибка')
    });
    it ("positive3", function() {
      const result = new Class
      const actual = result.quantityOfIndex('qweqrqtyq', 'q');
      const expected = 'q4'
        assert.equal(actual, expected, 'Ошибка')
    });
    
    it ("negative1", function() {
      const result = new Class
      const actual = result.quantityOfIndex('3 черненьких чумазеньких ', 0 as any);
      const expected = 'х2'
        assert.equal(actual, expected, 'Ошибка')
    });
    it ("negative2", function() {
      const result = new Class
      const actual = result.quantityOfIndex('Добрый день', NaN as any);
      const expected = ''
        assert.equal(actual, expected, 'Ошибка')
    });
    it ("negative3", function() {
      const result = new Class
      const actual = result.quantityOfIndex('abababbaaaaababab', 'a');
      const expected = ''
        assert.equal(actual, expected, 'Ошибка')
    });
});


describe("indexOfString test", function() {
  it ("positive1", function() {
    const result = new Class
    const actual = result.indexOfString('str with some subs in str', 'str');
    const expected = [0, 22]
      assert.equal(actual, expected, 'Ошибка')
  });
  it ("positive2", function() {
    const result = new Class
    const actual = result.indexOfString('hallo liebe hallo', 'hallo');
    const expected = [0, 12]
      assert.equal(actual, expected, 'Ошибка')
  });
  it ("negative1", function() {
    const result = new Class
    const actual = result.indexOfString(123556687536 as any, 3 as any);
    const expected = [2, 10]
      assert.equal(actual, expected, 'Ошибка')
  });
  it ("positive2", function() {
    const result = new Class
    const actual = result.indexOfString('Добрый день', NaN as any);
    const expected = []
      assert.equal(actual, expected, 'Ошибка')
  });
});

describe("deleteExclude test", function() {
  it ("positive1", function() {
    const result = new Class
    const actual = result.deleteExclude('3 str for 3 excercise 3', '3', 1);
    const expected = 'str for 3 excercise'
      assert.equal(actual, expected, 'Ошибка')
  });
  it ("positive2", function() {
    const result = new Class
    const actual = result.deleteExclude('hallo liebe hallo freunde hallo', 'hallo', 0);
    const expected = 'hallo liebe freunde'
      assert.equal(actual, expected, 'Ошибка')
  });
  it ("positive3", function() {
    const result = new Class
    const actual = result.deleteExclude('q a q a q a', 'a', 0);
    const expected = 'q a q q'
      assert.equal(actual, expected, 'Ошибка')
  });
  it ("negative1", function() {
    const result = new Class
    const actual = result.deleteExclude(123556687536 as any, 3 as any, 1);
    const expected = '12355668756'
      assert.equal(actual, expected, 'Ошибка')
  });
  it ("positive2", function() {
    const result = new Class
    const actual = result.deleteExclude('Добрый день', 3 as any, 1);
    const expected = [] as any
      assert.equal(actual, expected, 'Ошибка')
  });
});


describe("changeIndex test", function() {
  it ("positive1", function() {
    const result = new Class                                                        
    const actual = result.changeIndex('string', [3,4,2], [1,0,1]);                  
    const expected = 'stttsg'                                                       
      assert.equal(actual, expected, 'Ошибка')
  });
  it ("positive2", function() {      
    const result = new Class
    const actual = result.changeIndex('number', [0,1,2], [2,3,4]);
    const expected = 'mbeber'
      assert.equal(actual, expected, 'Ошибка')
  });
  it ("positive3", function() {
    const result = new Class                                                        
    const actual = result.changeIndex('hello', [3,4,2], [1,0,1]);                  
    const expected = 'heeeh'                                     
      assert.equal(actual, expected, 'Ошибка')
  });
  it ("negative1", function() {
    const result = new Class
    const actual = result.changeIndex(123556687536 as any, [4, 7, 8], [1, 5, 8]);
    const expected = '1235548761756'
      assert.equal(actual, expected, 'Ошибка')
  });
  it ("negative2", function() {
    const result = new Class
    const actual = result.changeIndex('добрый день' as any, [], {1: 2} as any);
    const expected = NaN as any
      assert.equal(actual, expected, 'Ошибка')
  });
});
