export const createKeyFile = (token: string, url: string) => `
HTTP = require("socket.http")

API_KEY = "${token}"

function _OnBoot()
	local data = ""

	local function sink(chunk)
		if chunk ~= nil then
			data = data .. chunk
		end
		
		return true
	end

	local ok, statusCode, headers, statusText = HTTP.request {
		method = "GET",
		url = "${url}",
		headers = {
			["authorization"] = "Bearer " .. API_KEY
		},
		sink = sink
	}

	if statusCode == 200 then
		local file = io.open(CHEATS_PATH .. "./" .. string.format("%X", GAME_ID) .. " KH2FMR Seed.pnach", "w")

		io.output(file)

		io.write(data)

		io.close(file)
	else
		error(data)
	end
end

function _OnInit()
end

function _OnFrame()
end
`;
