class Board
  attr_reader :current_player_name
  attr_accessor :cups, :board

  def initialize(name1, name2)
    @player_1 = name1
    @player_2 = name2
    @current_player_name = player_1
    @board = Array.new(14) { [] }
    @board.place_stones
  end

  def place_stones
    (1..6).each 
  end

  def valid_move?(start_pos)
    if current_player_name == @player_1 
      if start_pos <= 6 && start_pos >= 1
        return true
      end
    else
      if start_pos <= 12 && start_pos >= 7
        return true
      end
    end
    false
  end

  def make_move(start_pos, current_player_name)
    
  end

  def next_turn(ending_cup_idx)
    # helper method to determine whether #make_move returns :switch, :prompt, or ending_cup_idx
  end

  def render
    print "      #{@cups[7..12].reverse.map { |cup| cup.count }}      \n"
    puts "#{@cups[13].count} -------------------------- #{@cups[6].count}"
    print "      #{@cups.take(6).map { |cup| cup.count }}      \n"
    puts ""
    puts ""
  end

  def one_side_empty?
  end

  def winner
  end
end
