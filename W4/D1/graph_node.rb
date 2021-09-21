class GraphNode
  attr_reader :value, :neighbors
  def initialize(value)
    @value = value
    @neighbors = []
  end

  def neighbors=(nodeArr)
    nodeArr.each { |node| neighbors << node }
  end

  require "byebug"
  def bfs(starting_node, target_value)
    queue = [starting_node]
    already_queued = [starting_node]
    until queue.empty?
      node = queue.shift
      p node.value
      already_queued << node
      return node if node.value == target_value
      node.neighbors.each do |neighbor|
        queue << neighbor if !already_queued.include?(neighbor)
      end
    end
    nil
  end
end
