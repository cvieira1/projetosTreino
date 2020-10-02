class UsersController < ActionController::Base

    def signIn
        email = params[0]
        password = params[1]
        user = Users.where("email = '#{email}' and password = '#{password}'")
        render json: { data: user }
    end    

end