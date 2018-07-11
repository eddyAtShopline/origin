class User
	include Mongoid::Document
	store_in collection: "users",database: "on_board_db"
	field :first_name, type:String
	field :last_name, type:String
	field :gender, type:String
	field :age, type:Integer
	field :address, type: Hash, default: {:country=>'', :address_1=>'', :address_2=>''}
	has_one :shop


	validates :first_name, :last_name, presence: true
	validates :age, numericality: {greater_than: 0}
	validates :gender, inclusion: {in: %w(male female others), message: "Please type in male,female or others"}	


end






