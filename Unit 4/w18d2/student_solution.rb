# Get Started 
# puts "Hello World"

# adjective = "Big Bad"

# puts "Hello #{adjective} World"

# greet = "Hello World"
# greet.upcase!
# puts greet


# Nums Array and Enumerables

# nums = [5, 5, 6, 7, 2, 4, 3, 2, 1, 9, 7, 6, 0, 0, 35, 19, 66, 3, 22, 21, 4, 4, 4, 0, 1, 2, 3, 4, 12, 15]

# print nums.uniq
# print nums.push(77)
# print nums.pop
# print nums.shift
# print nums.unshift
# # print nums.length
# puts nums.include? 8
# puts nums.find_all { |i| i > 10}
# puts nums.all? { |i| i > 10}
# puts nums.any? { |i| i % 8 == 0}
# puts nums.count { |i| i > 4}
# nums.each_with_index { |item, index|
#     puts item * index
# }
# puts nums.find { |i| i % 5 == 0 and i % 7 == 0 and i > 0}
# puts nums.find_index { |i| i % 5 == 0 and i % 7 == 0 and i > 0} 
# puts nums.first(3)
# puts nums.last(5)
# puts nums.group_by {|i| i % 3}
# puts nums.minmax 
# puts nums.reject {|i| i % 3 != 0}
# puts nums.select {|i| i % 5 == 0}

# COLOR ARRAY
# colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

# puts colors.sample
# puts colors.reverse
# colors.each { |i| puts i.upcase}

#METHODS

# def find_area height, width
#     height * width
# end

# puts find_area(2, 4)

# nums = [5, 5, 6, 7, 2, 4, 3, 2, 1, 9, 7, 6, 0, 0]

# def multiply_each_by_five arr
#     arr.each { |i| 
#     print i * 5
#     }
# end

# multiply_each_by_five(nums)