module Isogram
  def Isogram.isogram?(text)
    mapa = {}
    text.scan(/([a-z]+)[ -,]*/i).each do |word|
      word[0].split('').each do |c|
        if text.scan(/#{c}{1}/i).length > 1
          return false
        end
      end
    end
    return true
  end
end