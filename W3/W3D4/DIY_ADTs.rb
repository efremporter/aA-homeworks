class Stack
  def initialize
    @stack = []
  end

  def push(el)
    @stack << el
  end

  def pop
    @stack.pop
    @stack
  end

  def peek
    @stack[-1]
  end
end

class Queue
  def initialize
    @queue = []
  end 

  def add(ele)
    @queue << ele
  end
  
  def remove
    @queue.shift
    @queue
  end

  def peek
    @queue[0]
  end

end

class Map

  def initialize
    @map = []
  end

  def set(k, v)
    unique = true
    hold = @map.length
    @map.each do |pair|
      if k == pair[0]
        pair[1] = v
        unique = false
      end
    end
    @map << [k, v] if unique
    @map
  end 

  def get(k)
    @map.each { |pair| return pair[1] if pair[0] == k }
    "Invalid Key"
  end
  
  def delete(k)
    newArr = []
    @map.each { |pair| newArr << pair if pair[0] != k }
    if newArr.length == @map.length
      return "Invalid Key"
    end
    @map = newArr
    @map
  end

  def show
    @map
  end
end
