module Isogram
    def isogram?(text)
        mapa = {}
        text.each do |c|
            if mapa.has_key? c.to_sym
                return false
            else
                mapa[c] = 0
            end
        end
        return true
    end
end