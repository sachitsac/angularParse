all:
	@echo "Installing new modules..."
	@npm install
	@echo "Installing 3rd party libraries..."
	@bower install
publish:
	@echo "Compiling via grunt and publishing..."
	@grunt build
dev:
	@echo "Starting dev environment..."
	@grunt dev
test: 
	@echo "Starting testing..."
	@grunt test
clean:
	@echo "Cleaning..."
	@grunt clean
	@rm -rf node_modules/