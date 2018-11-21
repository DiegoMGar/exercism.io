module Acronym
    def Acronym.abbreviate(text)
        text.scan(/([a-z]{1})[a-z]*[ -,]*/i).join('').upcase
    end
end