class Seed
attr_reader :seed
def initialize
  @seed
end

def run
  generate_data
end

def generate_data
  10.times do
    item = Item.new
    item.name = "Item"
    item.description = "I am a description."
    item.save!
    puts "Generated item  # #{item.id}"
  end
end
end

seed = Seed.new
seed.run