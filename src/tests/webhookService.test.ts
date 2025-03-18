import { describe, test, expect, vi, beforeEach, afterEach } from "vitest";
import { sendCharacterData } from "../services/webhookService"; 

describe("sendCharacterData", () => {
  beforeEach(() => {
    vi.stubGlobal("fetch", vi.fn());
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  test("debería enviar datos correctamente y devolver true", async () => {
    vi.mocked(fetch).mockResolvedValueOnce({
      ok: true,
      json: async () => ({}),
    } as Response);

    const formData = new FormData();
    formData.append("character", "Rick Sanchez");

    const result = await sendCharacterData(formData);
    expect(result).toBe(true);
  });

  test("debería lanzar un error si la respuesta no es exitosa", async () => {
    vi.mocked(fetch).mockResolvedValueOnce({
      ok: false,
      status: 500,
      statusText: "Internal Server Error",
    } as Response);

    const formData = new FormData();
    formData.append("character", "Morty Smith");

    await expect(sendCharacterData(formData)).rejects.toThrow(
      "Error: 500 - Internal Server Error"
    );
  });

  test("debería lanzar un error si fetch falla", async () => {
    vi.mocked(fetch).mockRejectedValueOnce(new Error("Network error"));

    const formData = new FormData();
    formData.append("character", "Summer Smith");

    await expect(sendCharacterData(formData)).rejects.toThrow("Network error");
  });
});
