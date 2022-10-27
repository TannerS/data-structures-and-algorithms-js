import Node from '../../src/node/Node';

describe('node:node', () => {
  it('should correct set data in constructor', () => {
    const node = new Node("test");

    expect(node.data).toEqual( "test");
    expect(node.next).toBeNull();
    expect(node.prev).toBeNull();
  });
});