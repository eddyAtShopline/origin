json.extract! @user, :first_name, :last_name
json.url name_url(@user,format: :json)