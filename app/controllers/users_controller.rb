class UsersController < ApplicationController 
  before_action :set_user, only: [:show, :edit, :update, :destroy, :updateUser]
  skip_before_filter :verify_authenticity_token, :only=>[:updateUser, :destroy]
  # GET /users
  # GET /users.json
  def index
    @users = User.all
  end

  # GET /users/1
  # GET /users/1.json
  def show
    render :show, formats: :json, handlers: [:jbuilder]
  end

  # GET /users/new
  def new
    @user = User.new
  end

  # GET /users/1/edit
  def edit
  end

  #GET /users/count
  def count
    @user_count = User.count
  end

  def name
    #Rails.logger.debug "======test #{params.inspect}"
    @user=User.find(params[:user_id])
    @user_first_name = @user.first_name
    @user_last_name = @user.last_name
  end

  # POST /users
  # POST /users.json
  def create 
    
    @user = User.new(user_params)

    respond_to do |format|
      if @user.save
        format.html { redirect_to @user, notice: 'User was successfully created.' }
        format.json { render :show, status: :created, location: @user }
      else
        format.html { render :new }
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /users/1
  # PATCH/PUT /users/1.json
  def update
    respond_to do |format|
      if @user.update(user_params)
        format.html { redirect_to @user, notice: 'User was successfully updated.' }
        format.json { render :show, status: :ok, location: @user }
      else
        format.html { render :edit }
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /users/1
  # DELETE /users/1.json
  def destroy
    @user.destroy
    respond_to do |format|
      format.html { redirect_to users_url, notice: 'User was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  # PUT /users/1/updateUser
  def updateUser
      if @user.update(user_params)
        render json: @user, status: :ok, location: @user 
      else
        render json: @user.errors, status: :unprocessable_entity 
      end
    
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def user_params
      params.require(:user).permit(:first_name, :last_name, :age, :gender, :address => [:country, :address_1, :address_2])
    end
end
