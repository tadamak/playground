# frozen_string_literal: true

source "https://rubygems.org"
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby "2.5.0"

gem "rails", "~> 5.2.0.beta2"

gem "bootsnap", ">= 1.1.0", require: false
gem "execjs"
gem "mini_racer", platforms: :ruby
gem "pg", "~> 0.18"
gem "puma", "~> 3.11"
gem "react_on_rails"
gem "skylight"
gem "webpacker"

group :development, :test do
  gem "byebug", platforms: %i[mri mingw x64_mingw]
  gem "pry-rails"
end

group :development do
  gem "listen", ">= 3.0.5", "< 3.2"
  gem "rubocop"
  gem "spring"
  gem "spring-watcher-listen", "~> 2.0.0"
  gem "web-console", ">= 3.3.0"
end

group :test do
  gem "rspec-rails"
end
