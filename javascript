import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

const games = {
  Chess: [
    "Each player has 16 pieces.",
    "Goal: Checkmate the king.",
    "Pawns move 1 step forward, capture diagonally.",
    "Knights move in 'L' shape.",
    "Game ends with checkmate or stalemate."
  ],
  Monopoly: [
    "Move around the board buying properties.",
    "Collect rent from opponents.",
    "Build houses/hotels to increase rent.",
    "Avoid bankruptcy.",
    "Winner: last player with money."
  ],
  Catan: [
    "First to 10 victory points wins.",
    "Build settlements, cities, and roads.",
    "Trade resources with other players.",
    "Robber blocks resource production.",
    "Dice rolls decide resources."
  ]
};

export default function App() {
  const [selectedGame, setSelectedGame] = React.useState(null);

  return (
    <View style={{ padding: 20, marginTop: 50 }}>
      {!selectedGame ? (
        <FlatList
          data={Object.keys(games)}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => setSelectedGame(item)}>
              <Text style={{ fontSize: 24, margin: 10 }}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
        />
      ) : (
        <View>
          <Text style={{ fontSize: 28, fontWeight: 'bold' }}>{selectedGame}</Text>
          {games[selectedGame].map((rule, index) => (
            <Text key={index} style={{ fontSize: 18, marginVertical: 5 }}>
              • {rule}
            </Text>
          ))}
          <TouchableOpacity onPress={() => setSelectedGame(null)}>
            <Text style={{ marginTop: 20, color: "blue" }}>Back</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
