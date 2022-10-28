import LinkedList from '../../src/list/LinkedList';

describe('linkedList', () => {
  it('should correct set data in constructor', () => {
    const linkedList = new LinkedList(1);

    expect(linkedList.toString()).toEqual( "1");
  });

  it('should prepend to list', () => {
    const linkedList = new LinkedList(1);

    linkedList.prepend(2);
    linkedList.prepend(3);
    linkedList.prepend(4);
    linkedList.prepend(5);

    expect(linkedList.toString()).toEqual( "5 4 3 2 1");
  });

  it('should append to list', () => {
    const linkedList = new LinkedList(1);

    linkedList.append(2);
    linkedList.append(3);
    linkedList.append(4);
    linkedList.append(5);

    expect(linkedList.toString()).toEqual( "1 2 3 4 5");
  });

  it('should find first element in contains', () => {
    const linkedList = new LinkedList(1);

    linkedList.append(2);
    linkedList.append(3);
    linkedList.append(4);
    linkedList.append(5);
    linkedList.prepend(2);
    linkedList.prepend(3);
    linkedList.prepend(4);
    linkedList.prepend(5);

    expect(linkedList.toString()).toEqual( "5 4 3 2 1 2 3 4 5");
    expect(linkedList.contains(5)).toBeTruthy();
    expect(linkedList.contains(-1)).toBeFalsy();
  });

  it('should return first element in get', () => {
    const linkedList = new LinkedList(1);

    linkedList.append(2);
    linkedList.append(3);
    linkedList.append(4);
    linkedList.append(5);
    linkedList.prepend(2);
    linkedList.prepend(3);
    linkedList.prepend(4);
    linkedList.prepend(5);

    expect(linkedList.toString()).toEqual( "5 4 3 2 1 2 3 4 5");
    expect(linkedList.get(5)).toEqual( 5);
  });

  it('should add in pos i', () => {
    const linkedList = new LinkedList(1);

    linkedList.add(0,2);

    linkedList.append(2);
    linkedList.append(3);
    linkedList.append(4);
    linkedList.append(5);

    linkedList.add(1,9);
    linkedList.add(3,8);
    linkedList.add(7,10);
    linkedList.add(8,11);
    // should not add
    linkedList.add(10,8);

    expect(linkedList.toString()).toEqual( "2 9 1 8 2 3 4 10 11 5");
  });

  it('should remove in pos i', () => {
    const linkedList = new LinkedList(1);

    linkedList.add(0,2);

    linkedList.append(2);
    linkedList.append(3);
    linkedList.append(4);

    linkedList.remove(0);
    linkedList.remove(2);

    expect(linkedList.toString()).toEqual( "1 2 4");

    linkedList.append(5);
    linkedList.append(8);
    linkedList.append(0);

    expect(linkedList.toString()).toEqual( "1 2 4 5 8 0");

    linkedList.remove(0);
    linkedList.remove(4);

    expect(linkedList.toString()).toEqual( "2 4 5 8");
  });

  it('should report size correctly', () => {
    const linkedList = new LinkedList(1);

    expect(linkedList.size).toEqual(1);

    linkedList.append(2);
    linkedList.append(3);
    linkedList.append(4);

    expect(linkedList.size).toEqual(4);

    linkedList.remove(0);

    expect(linkedList.size).toEqual(3);

    linkedList.append(5);
    linkedList.append(8);
    linkedList.append(0);

    expect(linkedList.size).toEqual(6);

    linkedList.remove(0);
    linkedList.remove(4);

    expect(linkedList.size).toEqual(4);

    linkedList.remove(0);
    linkedList.remove(0);
    linkedList.remove(0);
    linkedList.remove(0);

    expect(linkedList.size).toEqual(0);
  });

  it('should throw exception on out of bounds', () => {
    const linkedList = new LinkedList(1);

    expect(() => {
      linkedList.remove(0);
      linkedList.remove(0);
    }).toThrow('List is empty');
    expect(linkedList.size).toEqual(0);

    linkedList.append(1);
    linkedList.append(2);

    expect(linkedList.size).toEqual(2);

    expect(() => {
      linkedList.remove(3);
    }).toThrow('Out of bounds');
  });
});