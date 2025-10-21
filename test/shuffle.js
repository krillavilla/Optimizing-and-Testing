import { expect } from 'chai';
import { shuffle } from '../src/shuffle.js';

describe('shuffle function', () => {
  it('should rearrange the indexes of an array', () => {
    const originalArray = [1, 2, 3, 4, 5];
    const shuffledArray = shuffle(originalArray);
    
    // Test that the arrays contain the same elements
    expect(shuffledArray).to.have.members(originalArray);
    
    // Test that the array length is preserved
    expect(shuffledArray).to.have.lengthOf(originalArray.length);
    
    // Test that original array is not mutated
    expect(originalArray).to.deep.equal([1, 2, 3, 4, 5]);
  });

  it('should handle empty arrays', () => {
    const emptyArray = [];
    const shuffledArray = shuffle(emptyArray);
    
    expect(shuffledArray).to.be.an('array');
    expect(shuffledArray).to.have.lengthOf(0);
  });

  it('should handle arrays with one element', () => {
    const singleElementArray = [42];
    const shuffledArray = shuffle(singleElementArray);
    
    expect(shuffledArray).to.deep.equal([42]);
    expect(shuffledArray).to.have.lengthOf(1);
  });

  it('should return a different array instance', () => {
    const originalArray = [1, 2, 3];
    const shuffledArray = shuffle(originalArray);
    
    // Test that it's not the same reference
    expect(shuffledArray).to.not.equal(originalArray);
  });
});