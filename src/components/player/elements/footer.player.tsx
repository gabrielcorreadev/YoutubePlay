import { Button, View } from "native-base";
import React from "react";
import { Icon, Text } from "../../ui-element";
import { styles } from "../style/elements.stye";

export const FooterPlayer = ({ elapsed }: any) => (
    <View style={styles.footer_player}>
        <View style={{ flexDirection: 'row' }}>
            <View style={styles.left_navigation}>
                <Text>{elapsed}</Text>
            </View>
            <View style={styles.right_navigation}>
                <Button transparent>
                    <Icon name='maximize' type="Feather" style={styles.icon_action} />
                </Button>
            </View>
        </View>
    </View>
);