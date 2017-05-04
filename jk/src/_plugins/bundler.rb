# _plugins/bundler.rb
require "rubygems"
require "bundler/setup"
@@mtimes = {}
Bundler.require(:default)
