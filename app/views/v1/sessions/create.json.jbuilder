json.data do |variable|
	json.user do
		json .call(
			@user,
			:first_name,
			:last_name,
			:age,
			:gender,
			:address
		)
	end
end