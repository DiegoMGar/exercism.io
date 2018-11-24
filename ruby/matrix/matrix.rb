class Matrix
  attr_accessor :rows, :columns
  def initialize(matrix)
    @rows = []
    @columns = []
    matrix.split("\n").each do |row|
      i = 0
      rows.push(row.split(' ').map do |n|
          if not columns[i]
            columns.push([])
          end
            columns[i].push(Integer(n))
          i += 1
          Integer(n)
        end
      )
    end
  end
end