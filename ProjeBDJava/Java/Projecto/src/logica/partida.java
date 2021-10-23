package logica;

public class partida {
	
	private jugador Jugador;
	private palabra Palabras;
	private int codigo;
	private String nickname;
	private boolean finalizada;
	private int puntaje;
	
	public partida(jugador jugador, palabra palabras, int codigo, String nickname, boolean finalizada, int puntaje) {
		super();
		Jugador = jugador;
		Palabras = palabras;
		this.codigo = codigo;
		this.nickname = nickname;
		this.finalizada = finalizada;
		this.puntaje = puntaje;
	}

	public jugador getJugador() {
		return Jugador;
	}

	public void setJugador(jugador jugador) {
		Jugador = jugador;
	}

	public palabra getPalabras() {
		return Palabras;
	}

	public void setPalabras(palabra palabras) {
		Palabras = palabras;
	}

	public int getCodigo() {
		return codigo;
	}

	public void setCodigo(int codigo) {
		this.codigo = codigo;
	}

	public String getNickname() {
		return nickname;
	}

	public void setNickname(String nickname) {
		this.nickname = nickname;
	}

	public boolean isFinalizada() {
		return finalizada;
	}

	public void setFinalizada(boolean finalizada) {
		this.finalizada = finalizada;
	}

	public int getPuntaje() {
		return puntaje;
	}

	public void setPuntaje(int puntaje) {
		this.puntaje = puntaje;
	} 	

}
