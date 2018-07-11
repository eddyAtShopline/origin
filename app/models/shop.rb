class Shop
  include Mongoid::Document
  field :name, type: String
  belongs_to :user #a field containing user_id is created inside Shop`s db

end
