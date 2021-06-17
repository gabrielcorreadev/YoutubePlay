import { Button, View } from "native-base";
import React from "react";
import { Icon } from "../../ui-element";
import { styles } from "../style/elements.stye";

export const HeaderPlayer = () => (
    <View style={styles.header_player}>
        <View style={{ flexDirection: 'row' }}>
            <View style={styles.left_navigation}>
                <Button transparent>
                    <Icon name='chevron-down' type="Feather" style={styles.icon_action} />
                </Button>
            </View>
            <View style={styles.right_navigation}>
                <Button transparent>
                    <Icon name='more-horizontal' type="Feather" style={styles.icon_action} />
                </Button>
            </View>
        </View>
    </View>
);