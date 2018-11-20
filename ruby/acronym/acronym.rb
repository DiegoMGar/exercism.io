module Acronym
    def Acronym.abbreviate(text)
        text.split(/[ -]+/).collect { |word| word[0].upcase }.join('')
    end
end